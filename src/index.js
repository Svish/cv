
require('file-loader?name=[name].[ext]!./index.html');

require('file-loader?name=[name]!./.htaccess');
require('file-loader?name=[name].[ext]!./.htaccess.local');

require('./layout.less');



import $ from 'jquery';

// Store some shortcuts
const title = {
	tag: document.querySelector('title'),
	val: document.querySelector('title').innerText
};
const header = {
	tag: document.querySelector('#header'),
	image: document.querySelector('#header-image'),
	name: document.querySelector('#header-name')
};
const printStylesheet = document.querySelector('link[media=print]');


// Bind name and picture
$('#field-person-name')
	.keyup(onNameChanged)
	.keyup();
$('#field-person-picture')
	.change(onPictureChanged)
	.change();


// Bind buttons
$(document).on('click', 'button.add', onAdd);
$(document).on('click', 'button.remove', onRemove);
$(document).on('click', 'button#btn-preview', onPreview);


// Bind textareas
$(document)
	.on('change keyup paste cut', 'textarea', onTextareaChanged)
	.find('textarea')
	.change();


// Bind dates to sorter
$(document).on('change', '.dated .date', onDateChanged);





/**
 * Update header and title on name change.
 */
function onNameChanged(e)
{
	let name = e.target.value;
	header.name.innerText = name;
	if(name)
		title.tag.innerText = `${name} - ${title.val}`;
	else
		title.tag.innerText = `${title.val}`;
}


/**
 * Update header on picture change.
 */
function onPictureChanged(e)
{
	const file = e.target.files[0];
	if(file)
	{
		let reader = new FileReader();
		reader.onload = e =>
			header.image.style.backgroundImage = `url(${e.target.result})`;
		reader.readAsDataURL(file);
	}
	else
	{
		header.image.style.backgroundImage = '';
	}
}


/**
 * Sort rows by start date, descending.
 */
function onDateChanged(e)
{
	const row = e.target.closest('.dated');
	const fs = row.closest('fieldset');
	let rows = [...fs.querySelectorAll('.dated')];
	if(rows.length <= 1)
		return;

	let ci = rows.indexOf(row);
	rows.sort(datedRowCompare);
	let ni = rows.indexOf(row);

	if(ci === ni)
		return;
	
	fs.insertBefore(row, rows[ni+1]);
}
function datedRowCompare(x, y)
{
	// NOTE: Adding colon to prevent comparing as number
	const x_date = ':' + x.querySelector('input').value;
	const y_date = ':' + y.querySelector('input').value;

	if(x_date === y_date)
		return 0;

	return x_date > y_date ? -1 : 1;
}


/**
 * Add new row.
 */
var n = 0;
function onAdd(e)
{
	const btn = e.target;
	const fs = btn.closest('fieldset');
	
	let row = fs
		.querySelector('template')
		.content
		.querySelector('div');

	row = document.importNode(row, true);
	row.id = `${fs.name}-${n++}`;

	row
		.querySelectorAll('input')
		.forEach(i => {
			i.id = `field-${fs.name}-${n}-${i.name}`;
			i.name = `${fs.name}[${n}][${i.name}]`;
		});

	fs.insertBefore(row, btn.nextSibling);
	row.querySelector('input').focus();
}


/**
 * Remove row.
 */
function onRemove(e)
{
	const btn = e.target;
	if(e.originalEvent.shiftKey || confirm('Helt sikker? 🤔'))
		btn.closest('div').remove();
}


/**
 * Toggle print stylesheet.
 */
function onPreview(e)
{
	const c = printStylesheet.media;
	printStylesheet.media = c == 'print' ? 'all' : 'print';
	$(document)
		.find('textarea')
		.change();
}


/**
 * Auto resize textarea.
 */
function onTextareaChanged(e)
{
	this.style.height = 0;
	this.style.height = `calc(0*.25em + ${this.scrollHeight}px)`;
}
