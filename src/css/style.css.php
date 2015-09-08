<?php
    header('content-type: text/css');
    ob_start('ob_gzhandler');
    header('Cache-Control: max-age=31536000, must-revalidate');

    $base = file_get_contents('base.css', true);
    $color = file_get_contents('color.css', true);

    $topline = '#1976D2';
    $toplinetxt = '#fff';

    $header = '#2196F3';
    $headertxt = '#212121';

    $benefits = '#eee';
    $benefitstxt = '#999';

    $cta = '#CDDC39';
    $ctatxt = '#333';

    $custom = str_replace(
        ['%%topline%%','%%toplinetxt%%','%%header%%','%%headertxt%%','%%benefits%%','%%benefitstxt%%','%%cta%%','%%ctatxt%%'],
        [$topline, $toplinetxt, $header, $headertxt, $benefits, $benefitstxt, $cta, $ctatxt],
        $color
    );

    echo $base;
    echo $custom;
