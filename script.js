const userSignUpForm = document.querySelector("#sign-up"),
    userName = document.querySelector("#username"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    userNameError = document.querySelector("#username-error"),
    passwordError = document.querySelector("#password-error"),
    emailError = document.querySelector("#email-error"),
    personalNumber = document.querySelector('#personalNumber'),
    mobileNumber = document.querySelector('#mobileNumber');

function validateMobileNuber() {
    if (!password.value.length <= 9) {
		password.classList.add("error");
		passwordError.textContent = "password must be 4 or more charachter";
		// console.log(userName.validity.tooShort);
		return false;
	} else {
		passwordError.textContent = "";
		password.classList.remove("error");
		// password.type = "text";
		return true;
	}
}


function validatePersonalNumber() {
    if (!personalNumber.value != 11) {
        personalNumber.classList('error');
        personalNumber.textContent = 'user name required';
        
    }else {
        personalNumberError.textContent = "";
        personalNumber.classList.remove("error");
        return true;
    }
    if (!personalNumber.validity.valid) {
        personalNumber.classList('error');
        personalNumber.textContent = 'user name required';

    } else {
        personalNumberError.textContent = "";
        personalNumber.classList.remove("error");
        return true;
    }
}













function validateUserName() {
	// როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
	if (!userName.validity.valid) {
		// console.log(userName.validity);
		userName.classList.add("error");
		userNameError.textContent = "user name required";

		// true ან დაბლა false ს ვაბრუნებთ იმის მიხედვით ვალიდაცია გაიარა თუ არა
		return false;
	} else {
		userNameError.textContent = "";
		userName.classList.remove("error");
		return true;
	}
}

function validateEmail() {
	// როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
	if (!email.validity.valid) {
		email.classList.add("error");
		emailError.textContent = "email required";
		// როცა, ცარიელი არაა, მაგრამ მეილის სწორი ფორმა არაა და @ სიმბოლო არაა გამოყენებული
		if (email.validity.typeMismatch) {
			emailError.textContent = "not valid email";
		}
		return false;
	} else {
		emailError.textContent = "";
		email.classList.remove("error");
		return true;
	}
}

function validatePassword() {
	// როცა პაროლი 4 სიმბოლოზე ნაკლებია, მაშინ გამოვა ერორი
	if (password.value.length <= 4) {
		password.classList.add("error");
		passwordError.textContent = "password must be 4 or more charachter";
		// console.log(userName.validity.tooShort);
		return false;
	} else {
		passwordError.textContent = "";
		password.classList.remove("error");
		// password.type = "text";
		return true;
	}
}

userName.addEventListener("input", (e) => {
	// console.log(e.target.value);
	validateUserName();
});

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);

userSignUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	// console.log(userName.validity.valid);
	// console.log(email.validity);
	// ამ ცვლადებში ვინახავთ ინფორმაციას იმის შესახებ თითოეული ინფუთი იყო თუ არა ვალიდური
	const isValidUserName = validateUserName();
	const isValidEmail = validateEmail();
	const isValidPassword = validatePassword();

	// console.log(isValidUserName, isValidEmail, isValidPassword);

	// showModal();

	if (isValidUserName && isValidEmail && isValidPassword) {
		// თუ სამივე ინფუთი ვალიდურია ფორმა დასაბმითდეს / ან შევინახოთ ინფორმაცია და ბექის მხარეს გავაგზავნოთ
		// userSignUpForm.submit()

		const userInfo = {
			userName: userName.value,
			email: email.value,
			password: password.value,
		};

		console.log(userInfo);
		// მოდალის გამოტანა
		dynamicOpenModal("#sign-in-modal");
	}
});

// COMMENT modals, popup
const modalEl = document.querySelector(".modal"),
	closeBtn = document.querySelector(".modal-close"),
	openModalSecond = document.querySelector(".open-modal-second");

function showModal() {
	modalEl.classList.add("open");
}

function closeModal() {
	modalEl.classList.remove("open");
}

// closeBtn.addEventListener("click", closeModal);

function dynamicOpenModal(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.add("open");

		const closeBtn = modal.querySelector(".modal-close");
		closeBtn.addEventListener("click", () => {
			dynamicCloseModal(selector);
		});
	}
}

function dynamicCloseModal(selector) {
	const modal = document.querySelector(selector);
	if (modal) {
		modal.classList.remove("open");
	}
}

openModalSecond.addEventListener("click", () => {
	dynamicOpenModal("#sign-up-modal");
});

// ERROR HANDLING
const el = document.querySelector(".form2");

try {
	console.log("try start");
	el.addEventListener("click", (e) => {
		console.log(e);
	});
	console.log("try end");
} catch (error) {
	// ეს ერორი გამოვა იმ შემთხვევაში თუ try- ნაწილში ერორია და იმ ერორის შესახებ ინფორმაციას გამოიტანს
	console.log(error);
} finally {
	// ეს კოდი მაინც შესრულდება, მიუხედავად იმისა ერორი მოხდა თუ არა
	console.log("finally");
}

const el2 = document.querySelector(".form2");

if (el2) {
	el2.addEventListener("click", (e) => {
		console.log(e);
	});
}

console.log("example text");