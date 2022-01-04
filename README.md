# mars-rover-mission

## General info

For this project I've used Vue 3, recreating three main components for each of the 'characters' on this test: the Command Center, the Rover and the Mars Map. The first one is the one in charge and it emits every instruction to the rover, which handles them and executes as the CC commands. There are several variables in the shared state, updated from each one of the components and used by them too; for example, Map component reads position from the global state to print the rover position in a canvas.

### Tech stack

I've used several functionalities of Vue 3, starting by the Composition API and script setup. I've also used composables to keep my code clean and reusable. I would like to mention the use of props and emits, the last ones without event handling (thanks to v-model:props and update:emits). Finally, there are some lifecycle hooks and watchers to react to state changes and set stuff.

You can check the project here: https://paugarciamartinez.github.io/mars-rover-mission/
