#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

Process, Priority,, High

	7::\
	8::7
	9::8
	0::9
	-::0
	=::=
	e::f
	r::p
	t::b
	y::]
	u::j
	i::l
	o::u
	p::y
	[::'
	]::-
	CapsLock::Bs
	s::r
	d::s
	f::t
	h::[
	j::m
	k::n
	l::e
	`;::i
	'::o
	\::`;
	Lshift::LAlt
	SC056::LAlt
	z::x
	x::c
	c::d
	b::z
	n::/
	m::k
	,::h
	.::,
	/::.
	LAlt::LShift
	


#InputLevel 1
	RAlt::F24
#InputLevel 0
#Persistent
SetCapsLockState, AlwaysOff



	F24 & `::SendInput {Blind}{Esc}
		return
	F24 & 1::SendInput {Blind}{F1}
		return
	F24 & 2::SendInput {Blind}{F2}
		return
	F24 & 3::SendInput {Blind}{F3}
		return
	F24 & 4::SendInput {Blind}{F4}
		return
	F24 & 5::SendInput {Blind}{F5}
		return
	F24 & 6::SendInput {Blind}{F6}
		return
	F24 & 8::SendInput {Blind}{F7}
		return
	F24 & 9::SendInput {Blind}{F8}
		return
	F24 & 0::SendInput {Blind}{F9}
		return
	F24 & -::SendInput {Blind}{F10}
		return
	F24 & =::SendInput {Blind}{F11}
		return
	F24 & Bs::SendInput {Blind}{F12}
		return
	F24 & q::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click R Down}
		return
	F24 & q Up::SendInput {Click R Up}
		return
	F24 & w::SendInput {XButton1}
		return
	F24 & e::SendInput {Click 0 -7 0 Rel}
		return
	F24 & r::SendInput {XButton2}
		return
	F24 & y::SendInput {Blind}{PrintScreen}
		return
	F24 & i::SendInput {Blind}{Home}
		return
	F24 & o::SendInput {Blind}{Up}
		return
	F24 & p::SendInput {Blind}{End}
		return
	F24 & [::SendInput {Blind}{Del}
		return
	F24 & CapsLock::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click M Down}
		return
	F24 & CapsLock Up::SendInput {Click M Up}
		return
	F24 & a::
		if !GetKeyState("LButton", "P") && !GetKeyState("RButton", "P") && !GetKeyState("MButton","P")
			SendInput {Blind}{Click L Down}
		return
	F24 & a Up::SendInput {Click L Up}
		return
	F24 & s::SendInput {Click -7 0 0 Rel}
		return
	F24 & d::SendInput {Click 0 7 0 Rel}
		return
	F24 & f::SendInput {Click 7 0 0 Rel}
		return
	F24 & g::SendInput {Blind}{WheelUp}
		return
	F24 & j::SendInput {Blind}{PgUp}
		return
	F24 & k::SendInput {Blind}{Left}
		return
	F24 & l::SendInput {Blind}{Down}
		return
	F24 & `;::SendInput {Blind}{Right}
		return
	F24 & '::SendInput {Blind}{Enter}
		return
	F24 & v::SendInput {Blind}{WheelDown}
		return
	F24 & m::SendInput {Blind}{PgDn}
		return
	F24 & ,::SendInput {Blind}{Bs}
		return
	F24 & .::SendInput {Blind}{Tab}
		return
	F24 & /::SendInput {Appskey}
		return