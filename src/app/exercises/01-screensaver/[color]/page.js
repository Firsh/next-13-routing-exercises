import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

function ScreenSaverExercise({ params }) {
  return (
    <main className="screen-saver-wrapper">
      Color: {params.color}
      <ScreenSaver color={params.color} />
    </main>
  );
}

export default ScreenSaverExercise;
