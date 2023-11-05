import builder from 'builder';
import db from 'db';

// define each individual mutation
builder.mutationFields((t) => ({
	addUser: t.prismaField({
		type: 'User',
		args: {
			email: t.arg.string({ required: true }),
			passwordHash: t.arg.string({ required: true }),
			userName: t.arg.string({ required: true }),
		},
		resolve: async (query, _, args) => {
			const foundUser = await db.user.findFirst({
				...query,
				where: {
					OR: [
						{
							email: { equals: args.email },
						},
						{
							userName: { equals: args.userName },
						},
					],
				},
			});

			if (foundUser) {
				throw new Error('User already exists');
			}

			const newUser = await db.user.create({
				data: { ...args },
			});

			return newUser;
		},
	}),
}));
