import '../node_modules/angular';
import '../node_modules/angular-mocks';

const context = require.context('../src', true, /(spec|index|login)\.js$/);
context.keys().forEach(context);
