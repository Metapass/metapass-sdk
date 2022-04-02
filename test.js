import test from 'ava';
import metapassSdk from './index.js';

test('title', t => {
	t.throws(() => {
		metapassSdk(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(metapassSdk('unicorns'), 'unicorns & rainbows');
});
