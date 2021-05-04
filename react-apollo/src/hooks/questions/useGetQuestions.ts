import { gql, useQuery, useMutation } from "@apollo/client"
import { Question } from "../../common/interfaces/question.interface"


export const GET_QUESTIONS = gql`

query Questions{
    allQuestions{
      id
      title
    }
  }
`
// const { } = useMutation(GET_QUESTIONS, {context: {clientName: "name"} })

export const useGetQuestions = (): Question[] | undefined => {
    const { data } = useQuery(GET_QUESTIONS);
    return data?.allQuestions;
}