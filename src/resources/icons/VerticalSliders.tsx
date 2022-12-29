const VerticalSliders = ({ size = 16, className = "", style = {}, ...rest }) => {
	return (
		<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg"
			className={className}
			style={{
				height : size,
				width  : size,
				...style,
			}}
			{...rest}
		>
			<path d="M1.91474 0.10004C1.77577 0.102211 1.64334 0.159453 1.54655 0.259193C1.44975 0.358933 1.3965 0.493014 1.3985 0.631987V7.55686C1.03517 7.6544 0.706133 7.81082 0.482099 8.06286C0.152901 8.43321 0 8.90642 0 9.37258C0 9.83875 0.152901 10.312 0.482099 10.6823C0.706133 10.9343 1.03517 11.0908 1.3985 11.1883V13.5681C1.39751 13.6376 1.41035 13.7066 1.43627 13.7711C1.46218 13.8355 1.50065 13.8942 1.54945 13.9437C1.59825 13.9932 1.65639 14.0325 1.72051 14.0593C1.78462 14.0862 1.85343 14.1 1.92293 14.1C1.99243 14.1 2.06124 14.0862 2.12536 14.0593C2.18947 14.0325 2.24762 13.9932 2.29641 13.9437C2.34521 13.8942 2.38368 13.8355 2.4096 13.7711C2.43551 13.7066 2.44835 13.6376 2.44737 13.5681V11.1883C2.81069 11.0908 3.13973 10.9343 3.36376 10.6823C3.69296 10.312 3.84586 9.83875 3.84586 9.37258C3.84586 8.90642 3.69296 8.43321 3.36376 8.06286C3.13973 7.81082 2.81069 7.6544 2.44737 7.55686V0.631987C2.44837 0.561794 2.43528 0.492114 2.40886 0.427075C2.38244 0.362037 2.34323 0.302964 2.29356 0.253357C2.24389 0.20375 2.18477 0.164619 2.1197 0.138283C2.05463 0.111947 1.98493 0.0989426 1.91474 0.10004ZM6.28504 0.10004C6.14607 0.102211 6.01364 0.159453 5.91684 0.259193C5.82005 0.358933 5.7668 0.493014 5.76879 0.631987V2.3125C5.40547 2.41004 5.07643 2.56646 4.8524 2.8185C4.5232 3.18885 4.3703 3.66206 4.3703 4.12823C4.3703 4.59439 4.5232 5.0676 4.8524 5.43795C5.07643 5.68999 5.40547 5.84641 5.76879 5.94395V13.5681C5.76781 13.6376 5.78065 13.7066 5.80656 13.7711C5.83248 13.8355 5.87095 13.8942 5.91975 13.9437C5.96854 13.9932 6.02669 14.0325 6.09081 14.0593C6.15492 14.0862 6.22373 14.1 6.29323 14.1C6.36273 14.1 6.43154 14.0862 6.49566 14.0593C6.55977 14.0325 6.61792 13.9932 6.66671 13.9437C6.71551 13.8942 6.75398 13.8355 6.7799 13.7711C6.80581 13.7066 6.81865 13.6376 6.81767 13.5681V5.94395C7.18099 5.84641 7.51003 5.68999 7.73406 5.43795C8.06326 5.0676 8.21616 4.59439 8.21616 4.12823C8.21616 3.66206 8.06326 3.18885 7.73406 2.8185C7.51003 2.56646 7.18099 2.41004 6.81767 2.3125V0.631987C6.81867 0.561794 6.80558 0.492114 6.77916 0.427075C6.75274 0.362037 6.71353 0.302964 6.66386 0.253357C6.61419 0.20375 6.55507 0.164619 6.49 0.138283C6.42492 0.111947 6.35523 0.0989426 6.28504 0.10004ZM10.6553 0.10004C10.5164 0.102211 10.3839 0.159453 10.2871 0.259193C10.1903 0.358933 10.1371 0.493014 10.1391 0.631987V8.25611C9.77577 8.35365 9.44673 8.51007 9.2227 8.76211C8.8935 9.13245 8.7406 9.60567 8.7406 10.0718C8.7406 10.538 8.8935 11.0112 9.2227 11.3816C9.44673 11.6336 9.77577 11.79 10.1391 11.8876V13.5681C10.1381 13.6376 10.1509 13.7066 10.1769 13.7711C10.2028 13.8355 10.2413 13.8942 10.29 13.9437C10.3388 13.9932 10.397 14.0325 10.4611 14.0593C10.5252 14.0862 10.594 14.1 10.6635 14.1C10.733 14.1 10.8018 14.0862 10.866 14.0593C10.9301 14.0325 10.9882 13.9932 11.037 13.9437C11.0858 13.8942 11.1243 13.8355 11.1502 13.7711C11.1761 13.7066 11.1889 13.6376 11.188 13.5681V11.8876C11.5513 11.79 11.8803 11.6336 12.1044 11.3816C12.4336 11.0112 12.5865 10.538 12.5865 10.0718C12.5865 9.60567 12.4336 9.13245 12.1044 8.76211C11.8803 8.51007 11.5513 8.35365 11.188 8.25611V0.631987C11.189 0.561794 11.1759 0.492114 11.1495 0.427075C11.123 0.362037 11.0838 0.302964 11.0342 0.253357C10.9845 0.20375 10.9254 0.164619 10.8603 0.138283C10.7952 0.111947 10.7255 0.0989426 10.6553 0.10004ZM6.26045 3.26031C6.28228 3.26168 6.30418 3.26168 6.32601 3.26031C6.63584 3.26857 6.81875 3.36721 6.95014 3.51502C7.08711 3.66911 7.16729 3.89514 7.16729 4.12823C7.16729 4.36131 7.08711 4.58734 6.95014 4.74143C6.81317 4.89552 6.62829 5.00229 6.29323 5.00229C5.95817 5.00229 5.77329 4.89552 5.63632 4.74143C5.49935 4.58734 5.41917 4.36131 5.41917 4.12823C5.41917 3.89514 5.49935 3.66911 5.63632 3.51502C5.76771 3.36721 5.95062 3.26857 6.26045 3.26031ZM1.89015 8.50467C1.91198 8.50604 1.93388 8.50604 1.95571 8.50467C2.26554 8.51293 2.44845 8.61156 2.57984 8.75938C2.71681 8.91347 2.79699 9.1395 2.79699 9.37258C2.79699 9.60567 2.71681 9.8317 2.57984 9.98579C2.44845 10.1336 2.26554 10.2322 1.95571 10.2405C1.93388 10.2391 1.91198 10.2391 1.89015 10.2405C1.58032 10.2322 1.39741 10.1336 1.26602 9.98579C1.12905 9.8317 1.04887 9.60567 1.04887 9.37258C1.04887 9.1395 1.12905 8.91347 1.26602 8.75938C1.39741 8.61156 1.58032 8.51293 1.89015 8.50467ZM10.6308 9.20392C10.6526 9.20529 10.6745 9.20529 10.6963 9.20392C11.0061 9.21218 11.1891 9.31081 11.3204 9.45862C11.4574 9.61271 11.5376 9.83875 11.5376 10.0718C11.5376 10.3049 11.4574 10.531 11.3204 10.685C11.1891 10.8329 11.0061 10.9315 10.6963 10.9397C10.6745 10.9384 10.6526 10.9384 10.6308 10.9397C10.3209 10.9315 10.138 10.8329 10.0066 10.685C9.86965 10.531 9.78947 10.3049 9.78947 10.0718C9.78947 9.83875 9.86965 9.61271 10.0066 9.45862C10.138 9.31081 10.3209 9.21218 10.6308 9.20392Z" fill="currentColor"/>
		</svg>
	);
};

export default VerticalSliders;
