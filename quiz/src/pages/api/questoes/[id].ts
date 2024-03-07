import { NextApiRequest, NextApiResponse } from "next"
import questoes from "../bancoDeQuestoes"

export default function questoesPorId (req: NextApiRequest, res: NextApiResponse) {
    const idSelecionado = Number(req.query.id)
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)
    if(unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.converterParaObjeto())
    } else {
        res.status(400).send("Questao nao encontrada")
    }
}