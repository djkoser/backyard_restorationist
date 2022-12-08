import * as CSS from 'csstype';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../redux/store';
import {
  addUserManagementMethod,
  deleteUserManagementMethod
} from '../redux/userMethodSlice';
import { SwitchMakerProps, UserManagementMethodStateVersion } from '../types';

export const MethodSwitch: React.FC<SwitchMakerProps> = (props) => {
  const dispatch = useDispatch();
  // Determine if weed method is in user method list and check inputs accordingly

  const userMethods = useSelector<AppStore, UserManagementMethodStateVersion[]>(
    (state) => state.userMethod.userMethods
  );

  const { weedMethod } = props;

  let id: undefined | string;
  for (const method of userMethods) {
    if (weedMethod.methodId === method.methodId) {
      ({ id } = method);
    }
  }

  return (
    <div className="switchBody">
      <div className="switchPara">
        <span>
          <strong>Name: </strong>
          {weedMethod.name}
        </span>
        <div className="switchFlexBox">
          <div
            style={
              id
                ? undefined
                : ({ transform: 'translateY(15px)' } as CSS.Properties)
            }
            className="switch"
          >
            <h5
              style={
                id
                  ? undefined
                  : ({ transform: 'translateY(-6px)' } as CSS.Properties)
              }
              className="switchLabel"
            >
              {id ? 'Remove from Timeline' : 'Add to Timeline'}
            </h5>
            <input
              type="checkbox"
              id={`switch${weedMethod.methodId}`}
              checked={id ? true : false}
              onChange={() => {
                if (id) {
                  dispatch(deleteUserManagementMethod(id));
                } else {
                  dispatch(addUserManagementMethod(weedMethod.methodId));
                }
              }}
            />
            <label htmlFor={`switch${weedMethod.methodId}`}>
              <span className="switchSpan"></span>
            </label>
          </div>
        </div>
      </div>
      <br />
      <p className="treatmentDesc">
        <strong>Description: </strong>
        {weedMethod.description}
      </p>
    </div>
  );
};
