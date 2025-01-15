function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(
  mergeObjects({ name: 'atul' }, { class: 'ece', location: 'brijwasan' })
);
