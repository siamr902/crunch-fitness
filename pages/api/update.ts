import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, name, rating, duration, notes } = req.body;

  const result = await prisma?.workout.update({
    where: {
      id: id
    },
    data: {
      name: name,
      rating: rating,
      duration: duration,
      notes: notes,
    },
  });

  res.json(result)
}
