import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, rating, exercises, duration, notes } = req.body;
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
      duration: duration,
      notes: notes,
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
