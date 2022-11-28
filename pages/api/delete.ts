import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  const result = await prisma?.workout.delete({
    where: {
      id: id,
    },
  });

  res.json(result);
}
