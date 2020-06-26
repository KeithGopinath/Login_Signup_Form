import { formWatchers } from './Form';

export default function* rootWatchers() {
  yield [
    formWatchers(),
  ];
}
