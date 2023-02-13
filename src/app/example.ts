const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

const greet = (name: string): string => `Hello ${name}`;

const foo = async (): Promise<boolean> => {
  console.log(greet('World'));
  await delayMillis(1000);
  console.log('done');
  return true;
};

export {
  delayMillis, greet, foo,
};
