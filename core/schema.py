import graphene

from graphql_auth.schema import UserQuery, MeQuery
from users.schema import AuthMutations
from quiz.schema import QuizQueries, QuizMutations
from shop.schema import ShopQueries
from blog.schema import BlogQueries, BlogMutations



class Query(
    UserQuery,
    MeQuery,
    QuizQueries,
    ShopQueries,
    BlogQueries,

    graphene.ObjectType):
    pass


class Mutation(
    AuthMutations,
    QuizMutations,
    BlogMutations,
    
    graphene.ObjectType):
   pass



schema = graphene.Schema(query=Query, mutation=Mutation)