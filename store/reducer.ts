import { combineReducers } from 'redux'
import * as Columns from './columns'
import * as Features from './features'
import * as LoadFilename from './loadFilename'
import * as FeatureLength from './featureLength'
import * as CurrentDataNumber from './currentDataNumber'
import { FeatureValue } from '../interfaces'

export interface RootState {
    features: Features.State,
    columns: Columns.State,
    loadFilename: LoadFilename.State,
    featureLength: FeatureLength.State,
    currentDataNumber: CurrentDataNumber.State,
}

const inject: RootState = {
    features: {
        features: new Map<number, FeatureValue>()
    },
    columns: {
        columns: []
    },
    loadFilename: {
        loadFilename: ''
    },
    featureLength: {
        featureLength: 0
    },
    currentDataNumber: {
        currentDataNumber: 0
    }
}

export const initialState = (): RootState => {
    return {
        features: Features.initialState(inject.features),
        columns: Columns.initialState(inject.columns),
        loadFilename: LoadFilename.initialState(inject.loadFilename),
        featureLength: FeatureLength.initialState(inject.featureLength),
        currentDataNumber: CurrentDataNumber.initialState(inject.currentDataNumber),
    }
}

export const reducer = combineReducers({
    features: Features.reducer,
    columns: Columns.reducer,
    loadFilename: LoadFilename.reducer,
    featureLength: FeatureLength.reducer,
    currentDataNumber: CurrentDataNumber.reducer,
})