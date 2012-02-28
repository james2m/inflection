
var vows = require('vows'),
    inflect = require('../src/inflection.js'),
    assert = require('assert');

vows.describe('Inflection Tests').addBatch({
  
  "Inflect::pluralize » renders a singular English language noun into its plural form": function() {
    assert.equal(inflect.pluralize('kiss'), 'kisses');
    assert.equal(inflect.pluralize('knife'), 'knives');
    assert.equal(inflect.pluralize('turf'), 'turves');
    assert.equal(inflect.pluralize('potato'), 'potatoes');
  },
  
  "Inflect::singularize » renders a plural english noun into its singular form": function() {
    assert.equal(inflect.singularize('kisses'), 'kiss');
    assert.equal(inflect.singularize('knives'), 'knife');
    assert.equal(inflect.singularize('turves'), 'turf');
    assert.equal(inflect.singularize('potatoes'), 'potato');
  },
  
  "Inflect::camelize » renders a lower case underscored word into camel case": function() {
    assert.equal(inflect.camelize('hello_world_how_are_you'), 'HelloWorldHowAreYou');
  },
  
  "Inflect::underscore » renders a camel cased word into words separated by underscores": function() {
    assert.equal(inflect.underscore('HelloWorldHowAreYou'), 'hello_world_how_are_you');
  },
  
  "Inflect::humanize » renders a lower case and underscored word into human readable form": function() {
    assert.equal(inflect.humanize('employee_salary'), 'Employee salary');
  },
  
  "Inflect::capitalize » renders all characters to lower case and then makes the first upper": function() {
    assert.equal(inflect.capitalize('message_properties'), 'Message_properties');
    assert.equal(inflect.capitalize('message properties'), 'Message properties');
  },
  
  "Inflect::dasherize » renders all underbars and spaces as dashes": function() {
    assert.equal(inflect.dasherize('my_cool_object'), 'my-cool-object');
    assert.equal(inflect.dasherize('my cool object'), 'my-cool-object');
  },
  
  "Inflect::titleize » renders words into title casing": function() {
    assert.equal(inflect.titleize('message_properties'), 'Message Properties');
    assert.equal(inflect.titleize('message properties to keep'), 'Message Properties to Keep');
  },
  
  "Inflect::demodulize » renders class names that are prepended by modules into just the class": function() {
    assert.equal(inflect.demodulize('Message::Bus::Properties'), 'Properties');
  },
  
  "Inflect::tableize » renders camel cased singular words into their underscored plural form": function() {
    assert.equal(inflect.tableize('MessageBusProperty'), 'message_bus_properties');
  },
  
  "Inflect::classify » renders an underscored plural word into its camel cased singular form": function() {
    assert.equal(inflect.classify('message_bus_properties'), 'MessageBusProperty');
  },
  
  "Inflect::foreign_key » renders a class name (camel cased singular noun) into a foreign key": function() {
    assert.equal(inflect.foreign_key('MessageBusProperty'), 'message_bus_property_id');
    assert.equal(inflect.foreign_key('MessageBusProperty', true), 'message_bus_propertyid');
  },
  
  "Inflect::ordinalize » renders a number into its sequence": function() {
    assert.equal(inflect.ordinalize('1'), '1st');
    assert.equal(inflect.ordinalize('2'), '2nd');
    assert.equal(inflect.ordinalize('3'), '3rd');
    assert.equal(inflect.ordinalize('4'), '4th');
    assert.equal(inflect.ordinalize('99'), '99th');
    assert.equal(inflect.ordinalize('43'), '43rd');
    assert.equal(inflect.ordinalize('46'), '46th');
  }
  
}).export(module);