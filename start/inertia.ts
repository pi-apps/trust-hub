/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';

Inertia.share({
	errors: (context) => context.session.flashMessages.get('errors'),
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));
