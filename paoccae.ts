function greet(person: { name: string }): string {
  // Check if the person object and name are defined
  if (person && person.name) {
    return `Hello ${person.name}`;
  } else {
    // Handle the case where the person or name might be undefined
    return 'Hello guest';
  }
}
