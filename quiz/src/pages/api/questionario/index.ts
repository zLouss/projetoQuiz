import { NextApiRequest, NextApiResponse } from "next";
import questoes from "../bancoDeQuestoes";
import { embaralhar } from "../../../functions/arrays";

export default function questionario (req: NextApiRequest, res: NextApiResponse) {
    const ids = questoes.map(questoes => questoes.id)
    res.status(200).json(embaralhar(ids))
}