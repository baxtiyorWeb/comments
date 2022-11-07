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
		// comment view personal for
		comment_valuefirst.addEventListener('input', function () {
			p.innerHTML = comment_valuefirst.value
		})

		span.addEventListener('click', function () {
			lenght.parentElement.removeChild(lenght)
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
		let p = document.createElement('p')
		bold.innerHTML = namsecondnamee.value
		lenght.append(bold)
		lenght.append(p)
		let s = document.createElement('marker')
		lenght.append(s)
		lenght.append(p)
		s.classList.add("texts")
		s.innerHTML = comment_valuesecond.value;
		comment_valuesecond.value = ''
		let span = document.createElement('span')
		span.innerHTML = 'remove'
		lenght.append(s)
		lenght.append(p)
		lenght.append(span)

		comment_valuefirst.addEventListener('input', function () {
			p.innerHTML = comment_valuefirst.value;
			comment_valuesecond.value = p.innerText;
		})
		// comment view personal for



		span.addEventListener('click', function () {
			lenght.parentElement.removeChild(lenght)
			comment_valuesecond.value = p.innerText;

		})
	}
})