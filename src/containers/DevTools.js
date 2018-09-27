import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';
import Dispatcher from 'redux-devtools-dispatch';
import MultipleMonitors from 'redux-devtools-multiple-monitors';

/**
 * Exported from redux-devtools.
 * Monitors are separate packages, and you can make a custom one
 * createDevTools takes a monitor and produces a DevTools components.
 * Monitors are individually adjustable with props.
 * Consult their repositories to learn about those props.
 * Here, we put LogMonitor inside a DockMonitor.
 * Note: DockMonitor is visible by default.
 */
const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey="ctrl-h"
        changePositionKey="ctrl-q"
        changeMonitorKey="ctrl-m"
        defaultIsVisible={false}
    >
        <MultipleMonitors>
            <LogMonitor />
            <Dispatcher />
        </MultipleMonitors>
        <SliderMonitor />
        {/* <Inspector /> */}
        {/* <DiffMonitor /> */}
        {/* <FilterableLogMonitor /> */}
        {/* <ChartMonitor /> */}
    </DockMonitor>,
);

export default DevTools;
