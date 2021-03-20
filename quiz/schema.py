from graphene_django import DjangoObjectType
from graphene_django import DjangoListField
import graphene
from .models import Category, Quizzes, Questions, Answer

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name")


class QuizzesType(DjangoObjectType):
    class Meta:
        model = Quizzes
        fields = ("id", "title", "category", 'quiz')


class QuestionsType(DjangoObjectType):
    class Meta:
        model = Questions
        fields = ("title", "quiz")


class AnswerType(DjangoObjectType):
    class Meta:
        model = Answer
        fields = ("question", "answer_text")



class QuizQueries(graphene.ObjectType):
    
    all_quizzes = graphene.Field(QuizzesType, id=graphene.Int())
    #all_quizzes = DjangoListField(QuizzesType)

    all_questions = graphene.Field(QuestionsType, id=graphene.Int())

    all_answers = graphene.List(AnswerType, id=graphene.Int())

    def resolve_all_quizzes(root, info, id):
        return Quizzes.objects.get(pk=id)

    def resolve_all_questions(root, info, id):
        return Questions.objects.get(pk=id)

    def resolve_all_answers(root, info, id):
        # filter returns several objects
        # get returns one
        return Answer.objects.filter(question=id)



class CategoryMutation(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)

    category = graphene.Field(CategoryType)

    @classmethod
    def mutate(cls, root, info, name):
        category = Category(name=name)
        category.save()
        return CategoryMutation(category=category)
        


class UpdateCategoryMutation(graphene.Mutation):
    class Arguments:
        id= graphene.ID()
        name = graphene.String(required=True)
    
    category = graphene.Field(CategoryType)

    @classmethod
    def mutate(cls, root, info, name, id):
        category = Category.objects.get(id=id)
        category.name = name
        category.save()
        return UpdateCategoryMutation(category=category)

class DeleteCategoryMutation(graphene.Mutation):
    class Arguments:
        id= graphene.ID()
    
    category = graphene.Field(CategoryType)

    @classmethod
    def mutate(cls, root, info, id):
        category = Category.objects.get(id=id)
        category.delete()
        return




class QuizMutations(graphene.ObjectType):

    create_category = CategoryMutation.Field()
    update_category = UpdateCategoryMutation.Field()
    delete_category = DeleteCategoryMutation.Field()