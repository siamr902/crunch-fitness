import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, rating, exercises } = req.body;
  const session = await getSession({ req });

  const result = await prisma?.workout.create({
    data: {
      user: {
        connect: {
          email: session?.user?.email as string,
        },
      },
      name: name,
      rating: rating,
      exercises: {
        create: exercises,
      },
    },
    include: {
      exercises: true,
    },
  });
  res.json(result);
}
