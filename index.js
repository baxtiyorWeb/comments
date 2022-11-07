let element = document.querySelector('.element'),
	commentfirst = document.querySelector('.commentfirst'),
	comment_valuefirst = document.querySelector("#comment_valuefirst"),
	commentsecond = document.querySelector('.commentsecond'),
	comment_valuesecond = document.querySelector('#comment_valuesecond'),
	submitelemnt = document.querySelector('.submitelemnt'),
	first = document.querySelector('.first'),
	second = document.querySelector('.second'),
	yourcomment = document.querySelector('.yourcomment'),
	forFirstcomment = document.querySelector('.forFirstcomment'),
	forSecondcomment = document.querySelector('.forSecondcomment'),
	firstname = document.querySelector('.firstname'),
	namsecondnamee = document.querySelector('.secondname')


first.addEventListener('click', function () {
	if (comment_valuefirst.value !== "" && firstname.value !== "") {
		let lenght = document.createElement('div')
		forFirstcomment.append(lenght)
		lenght.classList.add('length')

		let p = document.createElement('p')
		let bold = document.createElement('b')
		bold.innerHTML = firstname.value
		lenght.append(bold)
		p.classList.add('spaned')
		let span = document.createElement('span')
		span.innerHTML = 'remove'
		lenght.append(p)
		lenght.append(span)
		p.innerHTML = comment_valuefirst.value;
		comment_valuefirst.value = ''
		



		span.addEventListener('click', function () {
			lenght.style.display = 'none'
			comment_valuefirst.value = p.innerText;
		})
	}
})

second.addEventListener('click', function () {
	if (comment_valuesecond.value !== "" && namsecondnamee.value !== "") {
		let lenght = document.createElement('div')
		forSecondcomment.append(lenght)
		lenght.classList.add('length')
		let bold = document.createElement('b')
		bold.innerHTML = namsecondnamee.value
		lenght.append(bold)
		let p = document.createElement('p')
		lenght.append(p)
		p.innerHTML = comment_valuesecond.value;
		comment_valuesecond.value = ''
		let span = document.createElement('span')
		span.innerHTML = 'remove'
		lenght.append(p)
		lenght.append(span)

		// comment view personal for
		





		span.addEventListener('click', function () {
			lenght.style.display = 'none'
			comment_valuesecond.value = p.innerText;
		})
	}
})