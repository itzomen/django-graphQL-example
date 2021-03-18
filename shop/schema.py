from graphene_django import DjangoObjectType
import graphene
from .models import Product

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        #fields = ("id", "name", "description")
        fields = "__all__"

class Query(graphene.ObjectType):
    products = graphene.List(ProductType)

    @graphene.resolve_only_args
    def resolve_products(self):
        return Product.objects.all()


schema = graphene.Schema(query=Query)