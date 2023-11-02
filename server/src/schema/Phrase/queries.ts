import builder from 'builder';
import db from 'db';

builder.prismaObject('Phrase', {
	name: 'Phrase',
	fields: (t) => ({
		id: t.exposeID('id'),
		phrase: t.exposeString('phrase'),
		targetLang: t.exposeString('targetLang'),
		translation: t.exposeString('translation'),
	}),
});

builder.queryType({
	fields: (t) => ({
		getPhrase: t.prismaField({
			type: 'Phrase',
			args: {
				phraseId: t.arg.string({ required: true }),
			},
			resolve: async (query, _, args) => {
				const foundPhrase = await db.phrase.findUnique({
					...query,
					where: { id: args?.phraseId },
				});

				if (!foundPhrase) {
					throw new Error('Phrase not found');
				}

				return foundPhrase;
			},
		}),
		getPhrases: t.prismaField({
			type: ['Phrase'],
			resolve: (query) => db.phrase.findMany(query),
		}),
	}),
});

// builder.queryFields((t) => ({
// 	getPhrase: t.prismaField({
// 		type: 'Phrase',
// 		args: {
// 			phraseId: t.arg.string({ required: true }),
// 		},
// 		resolve: async (query, _, args) => {
// 			const foundPhrase = await db.phrase.findUnique({
// 				...query,
// 				where: { id: args?.phraseId },
// 			});

// 			if (!foundPhrase) {
// 				throw new Error('Phrase not found');
// 			}

// 			return foundPhrase;
// 		},
// 	}),
// 	getPhrases: t.prismaField({
// 		type: ['Phrase'],
// 		resolve: (query) => db.phrase.findMany(query),
// 	}),
// }));
