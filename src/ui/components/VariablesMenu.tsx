import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { MathComponent } from "mathjax-react";
import styles from "../../css/components/VariablesMenu.module.css";
import DynamicComponentProps from "../props/DynamicComponentProps";
import { AppConstants } from "../../AppConstants";
import { ReactElement } from "../../types/types";
import { VariableComponent } from "./children/VariableComponent";

type DefaultVariableComponents = {
    count: number
    titles: string[]
    values: number[]
    incrementSteps: number[]
    lowestValues: number[]
    highestValues: number[]
    updateValues: Dispatch<SetStateAction<number>>[]
    decimalPrecisions: number[]
}

export const VariablesMenu: FC<DynamicComponentProps> = ({
    energyLevel,
    energyLevelCount,
    temperature,
    updateEnergyLevel,
    updateEnergyLevelCount,
    updateTemperature,
    style,
}) => {
    const data: DefaultVariableComponents = {
        count: 3,
        titles: ["Energy Level (n)", "Level Count (s)", "Temperature (K)"],
        values: [energyLevel, energyLevelCount, temperature],
        incrementSteps: [1, 1, 1],
        lowestValues: [AppConstants.LOWEST_ENERGY_LEVEL, AppConstants.LOWEST_ENERGY_LEVEL_COUNT, AppConstants.LOWEST_TEMPERATURE],
        highestValues: [energyLevelCount - 1, AppConstants.HIGHEST_ENERGY_LEVEL_COUNT, AppConstants.HIGHEST_TEMPERATURE],
        updateValues: [updateEnergyLevel, updateEnergyLevelCount, updateTemperature],
        decimalPrecisions: [0, 0, 0]
    }

    var defaultVariables: ReactElement[] = []

    console.log(data.updateValues);

    for (let i = 0; i < data.count; i++) {
        defaultVariables.push(
            <VariableComponent
                key={data.titles[i]}
                title={data.titles[i]} 
                value={data.values[i]} 
                incrementStep={data.incrementSteps[i]} 
                lowestValue={data.lowestValues[i]} 
                highestValue={data.highestValues[i]}
                updateValue={data.updateValues[i]}
                decimalPrecision={data.decimalPrecisions[i]}
            />
        )
    }

    useEffect(() => {
        if (energyLevel >= energyLevelCount - 1) {
            updateEnergyLevel(energyLevelCount - 1);
        }
    }, [energyLevelCount]);

    return(
        <div className={style}>
            <div className={styles.equationsDiv}>
                <div data-tooltip-id="q-fun">
                    <MathComponent
                        tex={String.raw`q = \sum\limits_{n=0}^s g_ie^{\frac{-E_i}{kT}}`}
                    />
                </div>

                <div data-tooltip-id="p-fun">
                    <MathComponent 
                        tex={String.raw`P_${energyLevel} = \frac{g_${energyLevel}e^{\frac{-E_${energyLevel}}{kT}}}{q}`}
                    />
                </div>

                <MathComponent 
                    tex={String.raw`P_${energyLevel} = \frac{e^{\frac{-E_${energyLevel}}{kT}}}{q}`}
                />
            </div>

            {defaultVariables}
        </div>
    );
}