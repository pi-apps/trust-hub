import Application from 'App/Models/Application';
import Factory from '@ioc:Adonis/Lucid/Factory';

export default Factory.define(Application, ({ faker }) => ({
	name: faker.company.name(),
	description: faker.company.catchPhrase(),
	domain: faker.internet.domainName(),
	email: faker.internet.email(),
	phone: faker.phone.number(),
	address: faker.address.streetAddress(),
	city: faker.address.city(),
	state: faker.address.state(),
	zip: faker.address.zipCode(),
	country: faker.address.country(),
	verified: faker.datatype.boolean(),
	brainstorm_id: faker.database.mongodbObjectId(),
	core_team: faker.datatype.boolean(),
})).build();
