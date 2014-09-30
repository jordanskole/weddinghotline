# The Cutest-Two Wedding Hotline

This is a super simple twilio API integration for creating a hotline for your wedding.
If you want, you could actually use it to create a hotline for any event.

I want these instructions to be super simple, and accessible to anybody even if you have never worked with the Twilio API before.
Therefore, if anything isn't ever clear create an issue on this repo and I will try and get to it as soon as possible.

## What is Twilio

Twilio is a service that allows you to connect _very simple_ web applications (like static html pages) to the broad telephone network.
You can do things like; make telephone calls, send text messages, receive telephone calls, receive text messages, send picture messages, etc...

## What is this app?

It is a super simple application that I built for my wedding.
I had started to receive several phone calls asking me about details, I found myself repeating the FAQs almost daily.
With a week to go, It was crunch time for me, and I knew it would only get worse since we had a destination wedding.

I decided to [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself) up the process, and to connect my guests to our wedding "docents" so Heather and I could enjoy ourself.

This application is a result of those needs. It basically works as follows:

* The user calls the hotline and is presented with any crucial updates for the day
* They can check the days events, and receive information about what to wear
* They can check the weather. I built this for grandmas and grandpas without smart phones
* They could be connected with a "docent," regardless of whether they had the docent's phone number or not.
  * Best Man
  * Maid of Honor
  * Mother of the Bride
  * Mother of the Groom
  * Father of the Bride
  * Father of the Groom
* They could record a message for Heather and Me to save and enjoy for years to come

## Whoa, Jordan, This Sounds Intimidating

Don't worry, it isn't. It's a super simple application that you will be able to use as a jumping off point to learn about Twilio, Node.js, and being able to deploy in a production environment.
It has everything you need, you just need to make a few changes.

### So What Do I Need to Get started?

You will need the following, easy to install things:

* [Node.js](http://nodejs.org/download/)
* [A Free Heroku Account](https://www.heroku.com/)
* [Git](https://help.github.com/articles/set-up-git)
* [A GitHub Account](https://github.com/)

It is not necessary, but it will be helpful if you have a very simple grasp of JavaScript and HTML.
If not, NBD, I will try and walk you through everything you need to get started.
If you prefer a video guide, you may enroll in [this course here](http://jordanskole.usefedora.com/course/wedding-hotline/).

### Getting Started

You will want to make changes to the code I have in this repo.
Specifically you will want to replace phone numbers to my family with phone numbers to your family, and my recordings with your recordings.
