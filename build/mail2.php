<?php
echo $_POST['name'];
echo $_POST['phone'];



		$from = $_POST['mail'];
		$to .= "padavan94@gmail.com, webmarketingua@gmail.com, since.ua@gmail.com, osipov.km@gmail.com,webserfing4you@gmail.com,webmarketingua@gmail.com,lhcmyul@gmail.com, valeriia.prokopchuk@gmail.com, gamilton83@yandex.ru, statsishin93@mail.ru";
		$subject = "garnet-soft - lp";
		$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
					Форма обратной связи попап
						<table>
							<tbody>
								<tr>
									<td style="width: 100px;">Имя:</td>
									<td>'.$_POST['name'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Телефон:</td>
									<td>'.$_POST['phone'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Менеджер:</td>
									<td>'.$_POST['group1w'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Страница, с котой пришла заявка:</td>
									<td>'.$_POST['location'].'</td>
								</tr>
								<tr>
									<td style="width: 100px;">Елемент, который привлек внимание</td>
									<td>'.$_POST['whereClick'].'</td>
								</tr>
								
							</tbody>
						</table>                  
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги;
		
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html;charset=UTF-8' . "\r\n";
		$headers .= "From:" . $from;
		mail($to,$subject,$message, $headers);
	
?>