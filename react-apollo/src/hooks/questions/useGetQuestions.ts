import { gql, useQuery } from "@apollo/client"
import { Question } from "../../common/interfaces/question.interface"


const GET_QUESTIONS = gql`

query Questions{
    allQuestions{
      id
      title
    }
  }
`

export const useGetQuestions = (): Question[] | undefined => {
    const { data } = useQuery(GET_QUESTIONS);
    return data?.allQuestions;
}