import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
    Legend
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { country: 'Cryptocurrency', area: 45 },
    { country: 'Stock', area: 18 },
    { country: 'Metal', area: 22 },
    { country: 'Real Estate', area: 10 },
    { country: 'Business', area: 5 }
];
export default class PieChart extends React.PureComponent<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper>
                <Chart
                    data={chartData}
                    width={550}
                >
                    <PieSeries
                        valueField="area"
                        argumentField="country"
                    />
                    <Title
                        text="Assets"
                    />
                    <Legend/>
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}