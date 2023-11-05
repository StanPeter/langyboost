import db from "db";

// import existing phrases from a xslx DB file -> replacing local Postgres downloaded data with Atlas MongoDB cloud 
export const seedPhrases = async () => {
	await db.$connect();
	console.log('connected');

	// Reading our test file
	// const file = reader.readFile('C:/projekty/langyboost/server/src/data.xlsx');
	// let data: any = [];
	// let counter: number = 0;
	// const sheets = file.SheetNames;
	// const allFounds = await db.phrase.findRaw({});
	// for (let i = 0; i < sheets.length; i++) {
	// 	const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
	// 	temp.forEach(async (res: any) => {
	// 		const foundPhrase = await db.phrase.findFirst({ where: { phrase: res.Phrase } });
	// 		console.log(foundPhrase, ' foundPhrase foundPhrase');
	// 		if (!foundPhrase) {
	// 			await db.phrase.create({
	// 				data: { phrase: res.Phrase, targetLang: 'de', translation: '' },
	// 			});
	// 			console.log(res.Phrase, ' PHRASE CREATED');
	// 			counter += 1;
	// 		}
	// 		// if (res.Phrase) {
	// 		// 	data.push(res);
	// 		// }
	// 	});
	// }
	// console.log(allFounds.length, ' TOTAL COUNT');
};
