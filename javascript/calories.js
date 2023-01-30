function randomInt(min, max) { return Math.floor(Math.random() * ((max + 1) - min)) + min; } // do not touch or change this line!!!


// Options
const sex_options = ['male', 'female'];
const activity_options = ['sedentary', 'moderately active', 'active'];

const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

// Input
let sex_input = randomInt(0, 1);
let activity_input = randomInt(0, activity_options.length - 1);

// Input processing
let user_sex = sex_options[sex_input];
let user_age = randomInt(19, 60);
let user_activity = activity_options[activity_input];

// User info
console.log("User info:");
console.log('Sex:', user_sex);
console.log('Age:', user_age);
console.log('Activity Level:', user_activity);

console.log("");

let weekly_calories_consumed = 0;

for (let i = 0; i < weekdays.length; i++)
{
  const min_calory_intake = 1200;
  const max_calory_intake = 3500;

  const calory_intake = randomInt(min_calory_intake, max_calory_intake);

  weekly_calories_consumed += calory_intake;

  console.log('Consumed ' + calory_intake + ' calories on ' + weekdays[i]);

  if (user_sex === 'female') {
    if (user_age >= 19 && user_age <= 30) {
      if (user_activity === 'sedentary') {
        if (calory_intake < 1900) {
          let calories_remains = 1900 - calory_intake;

          console.log("You need to get " + calories_remains + " calories more today.");
        } else if (calory_intake >= 1900 && calory_intake <= 2000) {
          console.log('You’ve consumed the optimal number of calories today.')
        } else {
          let excess_calories = calory_intake - 2000;

          console.log('You’ve consumed ' + excess_calories + ' calories more than necessary today. Eat less!!!')
        }
      }
    }
  }
}

console.log();
console.log('Consumed ' + weekly_calories_consumed + ' this week!');