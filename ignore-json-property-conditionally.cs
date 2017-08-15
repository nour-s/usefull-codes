public class PropertyDiscarderResolver : DefaultContractResolver
{
    public static Dictionary<Type, List<string>> propertiesToIgnore = new Dictionary<Type, List<string>>();

    public PropertyDiscarderResolver()
    {
        AddProperty<TenancyDetailModel>(p => p.Property);
    }

    public static void AddProperty<T>(Expression<Func<T, object>> propertyLambda)
    {
        var propertyName = GetPropertyInfo<T>(propertyLambda);
        propertiesToIgnore[typeof(T)].Add(propertyName);
    }

    protected override JsonProperty CreateProperty(MemberInfo member, MemberSerialization memberSerialization)
    {
        JsonProperty property = base.CreateProperty(member, memberSerialization);
        var typeIsFound = propertiesToIgnore.ContainsKey(property.DeclaringType);

        if (typeIsFound && propertiesToIgnore[property.DeclaringType].Contains(property.PropertyName))
        {
            property.ShouldSerialize =
                    instance =>
                    {
                        TenancyDetailModel e = (TenancyDetailModel)instance;
                        return false;
                    };
        }

        return property;
    }

    public static string GetPropertyInfo<TSource>(Expression<Func<TSource, object>> propertyLambda)
    {
        Type type = typeof(TSource);

        MemberExpression member = propertyLambda.Body as MemberExpression;
        if (member == null)
            throw new ArgumentException(string.Format("Expression '{0}' refers to a method, not a property.", propertyLambda.ToString()));

        PropertyInfo propInfo = member.Member as PropertyInfo;
        if (propInfo == null)
            throw new ArgumentException(string.Format("Expression '{0}' refers to a field, not a property.", propertyLambda.ToString()));

        if (type != propInfo.ReflectedType && !type.IsSubclassOf(propInfo.ReflectedType))
            throw new ArgumentException(string.Format(
                "Expresion '{0}' refers to a property that is not from type {1}.",
                propertyLambda.ToString(),
                type));

        return propInfo.Name;
    }
}
