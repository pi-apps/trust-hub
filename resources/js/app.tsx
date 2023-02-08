import { InertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.css';

const root = document.querySelector<HTMLDivElement>('#app');

ReactDOM.render(
	<InertiaApp
		initialPage={JSON.parse(root.dataset.page)}
		initialComponent={root.dataset.component}
		resolveComponent={(name) => require(`./pages/${name}`)}
	/>,
	root,
);
