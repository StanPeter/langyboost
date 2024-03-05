import builder from 'builder';
import db from 'db';

// define model for User based on Prisma
builder.prismaObject('User', {
	name: 'User',
	fields: (t) => ({
		id: t.exposeID('id'),
		firstName: t.exposeString('firstName', { nullable: true }),
		lastName: t.exposeString('lastName', { nullable: true }),
		userName: t.exposeString('userName'),
		email: t.exposeString('email'),
		birthday: t.exposeString('birthday', { nullable: true }),
		phoneNumber: t.exposeString('phoneNumber', { nullable: true }),
		address: t.exposeString('address', { nullable: true }),
		nationality: t.exposeString('nationality', { nullable: true }),
		membershipType: t.exposeString('membershipType', { nullable: true }),
		membershipExpiration: t.exposeString('membershipExpiration', { nullable: true }),
		avatar: t.exposeString('avatar', { nullable: true }),
		// accessToken: t.exposeString('', { nullable: true }),
	}),
});

// define each individual query
builder.queryFields((t) => ({
	getUser: t.prismaField({
		type: 'User',
		args: {
			userId: t.arg.string({ required: true }),
		},
		resolve: async (query, _, args) => {
			const user = await db.user.findUnique({
				...query,
				where: { id: args?.userId },
			});

			if (!user) {
				throw new Error('User not found');
			}

			return user;
		},
	}),
	getUsers: t.prismaField({
		type: ['User'],
		resolve: (query) => db.user.findMany(query),
	}),
}));
