/**
 * Feel free to let me know via PR,
 * if you find something broken in this config file.
 */

import type { InertiaConfig } from '@ioc:EidelLev/Inertia';

/*
|--------------------------------------------------------------------------
| Inertia-AdonisJS config
|--------------------------------------------------------------------------
|
*/

export const inertia: InertiaConfig = {
	view: 'app',
	ssr: {
		enabled: true,
		buildDirectory: 'build/inertia/ssr',
	},
};
