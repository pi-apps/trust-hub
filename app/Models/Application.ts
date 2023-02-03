import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

/**
 * Model representing an application
 */
export default class Application extends BaseModel {
	/**
	 * The id of the application
	 */
	@column({ isPrimary: true })
	public id: number;

	/**
	 * The name of the application
	 */
	@column()
	public name: string;

	/**
	 * The description of the application
	 */
	@column()
	public description: string;

	/**
	 * The domain of the application url
	 */
	@column()
	public domain: string;

	/**
	 * The contact email of the application
	 */
	@column()
	public email: string;

	/**
	 * The contact phone of the application
	 */
	@column()
	public phone: string;

	/**
	 * The address of the application company
	 */
	@column()
	public address: string;

	/**
	 * The city of the application company
	 */
	@column()
	public city: string;

	/**
	 * The state of the application company
	 */
	@column()
	public state: string;

	/**
	 * The zip code of the application company
	 */
	@column()
	public zip: string;

	/**
	 * The country of the application company
	 */
	@column()
	public country: string;

	/**
	 * Whether the application has been verified
	 */
	@column()
	public verified: boolean;

	/**
	 * The wallet address of the application
	 */
	@column()
	public wallet_address: string;

	/**
	 * The brainstorm id of the application
	 */
	@column()
	public brainstorm_id: string;

	/**
	 * Whether the application is an application from the Core Team
	 */
	@column()
	public core_team: boolean;

	/**
	 * The date and time of the application creation
	 */
	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	/**
	 * The date and time of the last application update
	 */
	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
