'use strict';

const { FlowConfig, FlowExpression, Rgb } = require('../yeelight');
const { Bulb } = require('../yeelight');


const l1 = new Bulb('10.0.0.196');
l1.connect();

const flowRoutines = [];
flowRoutines.push(new FlowExpression(300, new Rgb(255, 0, 0)));
flowRoutines.push(new FlowExpression(300, new Rgb(0, 255, 0)));
flowRoutines.push(new FlowExpression(300, new Rgb(0, 0, 255)));

const flowConfig = new FlowConfig(flowRoutines, { repeatTimes: 30 });

l1.flow(flowConfig);

// l1.toggle();

l1.disconnect();
