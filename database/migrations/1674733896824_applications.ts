import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class extends BaseSchema {
	protected tableName = 'applications';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');
			table.string('name').notNullable();
			table.string('description').nullable();
			table.string('domain').notNullable();
			table.string('email').nullable();
			table.string('phone').nullable();
			table.string('address').nullable();
			table.string('city').nullable();
			table.string('state').nullable();
			table.string('zip').nullable();
			table.string('country').nullable();
			table.boolean('verified').notNullable().defaultTo(false);
			table.string('wallet_address').checkLength('=', 56).nullable();
			table.string('brainstorm_id').checkLength('=', 24).nullable();
			table.boolean('core_team').notNullable().defaultTo(false);

			/**
			 * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
			 */
			table.timestamp('created_at', { useTz: true });
			table.timestamp('updated_at', { useTz: true });
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
