# Angular: Restaurant Directory

## Environment 

- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12.18.3
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/lFDLpBF_YMPHSNM8JHWR6w/restaurant-directory.gif)

## Functionality Requirements

- There is an input field for 'Restaurant Name' in which the user can type the name of the restaurant.
- There is an input field for 'City Name' in which the user can type the city name where restaurant is located.
- Both inputs should be empty initially.
- Clicking on the 'Submit' button should add restaurant details in the table below. After adding the values to the table, clear the value of the input fields.
- Each restaurant should be added as an individual row `<tr>` to table body `<tbody>`. Each row should have 2 columns - `<td>{Restaurant Name}</td>` and `<td>{City Name}</td>`.
- Both the input values are required to add a new restaurant. Nothing should happen if the 'Submit' button is clicked when both the values are not set.


## Testing Requirements

- The 'Restaurant Name' input should have the data-test-id attribute 'restaurant-name-input'.
- The 'City Name' input should have the data-test-id attribute 'city-name-input'.
- The 'Submit' button should have the data-test-id attribute 'submit-button'.
- The table body `<tbody>` should have the data-test-id attribute 'restaurant-list'.

## Project Specifications

**Read-only Files**
- src/app/restaurantDirectory/restaurantDirectory.component.spec.ts
- src/app/app.component.spec.ts
- src/app/app.component.ts
- src/app/app.module.ts

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
