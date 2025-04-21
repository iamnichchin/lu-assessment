const { profile } = require('console');
const { test } = require('../fixtures/loginFixtures');
const BookPage = require('../pages/bookPage');
const ProfilePage = require('../pages/profilePage');
const { expect } = require('@playwright/test');

const riderName = 'Chin';
const riderLastName = 'Lu';
const riderEmail = 'chin-mail@mailinator.com';

test('Verify if My Profile Page is shown', async ({ loggedInPage }) => {
  //logging in
  await expect(loggedInPage).toHaveURL(/.*book/);
  await expect(loggedInPage.locator('h2')).toHaveText('Trusted drivers at your service');
  
  //Book Page to Account Page
  const bookPage = new BookPage(loggedInPage); 
  await bookPage.clickAccount();
  await expect(loggedInPage).toHaveURL(/.*account/);  
  await bookPage.verifyRiderName(riderName); 
  await bookPage.verifyRiderEmail(riderEmail);

  //Account Page to My Profile Page
  const profilePage = new ProfilePage(loggedInPage);
  await profilePage.clickyMyProfileTab();
  await expect(loggedInPage).toHaveURL(/.*profile/);
  await profilePage.verifyProfilePageContent('My Profile', riderName);

  //Verify the value of the "firstname" input field
  await profilePage.verifyFirstName(riderName);
  await profilePage.verifyLastName(riderLastName);
  await profilePage.verifyLocation();
  await profilePage.verifyBio();

});