import builder from 'builder';
import db from 'db';

// define each individual mutation
builder.mutationFields((t) => ({
	addPhrase: t.prismaField({
		type: 'Phrase',
		args: {
			phrase: t.arg.string({ required: true }),
			targetLang: t.arg.string({ required: true }),
			translation: t.arg.string({ required: true }),
		},
		resolve: async (query, _, args) => {
			const phrase = await db.phrase.findFirst({
				...query,
				where: {
					phrase: args.phrase,
				},
			});

			if (phrase) {
				throw new Error('Phrase already exists');
			}

			const newPrase = await db.phrase.create({
				data: args,
			});

			return newPrase;
		},
	}),
}));
