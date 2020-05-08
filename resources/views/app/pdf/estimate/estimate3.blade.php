<!DOCTYPE html>
<html>

<head>
    <title>Estimate</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style type="text/css">
        /* -- Base -- */
        body {
            font-family: "DejaVu Sans";
        }

        html {
            margin: 0px;
            padding: 0px;
            margin-top: 50px;
        }

        table {
            border-collapse: collapse;
        }

        hr {
            color: rgba(0, 0, 0, 0.2);
            border: 0.5px solid #EAF1FB;
            margin: 0 30px 0 30px;
        }

        /* -- Header -- */

        .header-container {
            position: absolute;
            width: 100%;
            height: 150px;
            left: 0px;
            top: -60px;
        }

        .header-section-left {
            padding-top: 45px;
            padding-bottom: 45px;
            padding-left: 30px;
            display: inline-block;
            width: 30%;
        }

        .header-bottom-divider {
            color: rgba(0, 0, 0, 0.2);
            position: absolute;
            top: 100px;
            left: 0px;
            width: 100%;
        }

        .header-logo {
            position: absolute;
            height: 50px;
            text-transform: capitalize;
            color: #817AE3;
        }

        .header-section-right {
            display: inline-block;
            position: absolute;
            right: 0;
            padding: 15px 30px 15px 0px;
            float: right;
        }

        .header {
            font-size: 20px;
            color: rgba(0, 0, 0, 0.7);
        }

        /* -- Company Address -- */

        .company-address-container {
            width: auto;
            text-transform: capitalize;
            margin-bottom: 2px;
        }

        .company-address-container h1 {


            font-size: 15px;
            line-height: 22px;
            letter-spacing: 0.05em;
            margin-bottom: 0px;
            margin-top: 10px;
        }

        .company-address {
            margin-top: 2px;
            text-align: left;


            font-size: 12px;
            line-height: 15px;
            color: #595959;
        }

        /* -- Content Wrapper -- */

        .wrapper {
            display: block;
            padding-top: 100px;
            padding-bottom: 20px;
        }

        .main-content {
        }

        .customer-address-container {
            display: inline;
            float: left;
            width: 40%;
            padding: 0 0 0 30px;
        }

        /* -- Shipping -- */

        .shipping-address-container {
            float: right;
            display: block;
        }

        .shipping-address-container--left {
            float: left;
        }

        .shipping-address-label {
            padding-top: 5px;
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 0px;
        }

        .shipping-address-name {
            padding: 0px;
            font-size: 15px;
            line-height: 22px;
            margin: 0px;
            max-width: 160px;
        }

        .shipping-address {
            font-size: 10px;
            line-height: 15px;
            color: #595959;
            margin: 0px;
            width: 160px;
        }

        /* -- Billing -- */

        .billing-address-container {
            float: left;
        }

        .billing-address-label {
            padding-top: 5px;
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 0px;
        }

        .billing-address-name {
            padding: 0px;
            font-size: 15px;
            line-height: 22px;
            margin: 0px;
            max-width: 160px;
        }

        .billing-address {
            font-size: 10px;
            line-height: 15px;
            color: #595959;
            margin: 0px;
            width: 160px;
        }

        /* -- Estimate Details -- */

        .estimate-details-container {
            display: block;
            float: right;
            padding: 20px 30px 0 0;
        }

        .attribute-label {
            font-size: 12px;
            line-height: 18px;
            text-align: left;
            color: #55547A
        }

        .attribute-value {
            font-size: 12px;
            line-height: 18px;
            text-align: right;
        }

        /* -- Items Table -- */

        .items-table {
            padding: 30px 30px 10px 30px;
            page-break-before: avoid;
            page-break-after: auto;
        }

        .items-table hr {
            height: 0.1px;
        }

        .item-table-heading {
            font-size: 13.5;
            text-align: center;
            color: rgba(0, 0, 0, 0.85);
            padding: 5px;
            padding-bottom: 10px;
        }

        tr.item-table-heading-row th {
            border-bottom: 0.620315px solid #E8E8E8;
            font-size: 12px;
            line-height: 18px;
        }

        .item-table-heading-row {
            margin-bottom: 10px;
        }

        tr.item-row td {
            font-size: 12px;
            line-height: 18px;
        }

        .item-cell {
            font-size: 13;
            color: #040405;
            text-align: center;
            padding: 5px;
            padding-top: 10px;
            border-color: #d9d9d9;
        }

        .item-description {
            color: #595959;
            font-size: 9px;
            line-height: 12px;
        }

        /* -- Total Display Table -- */

        .total-display-container {
            padding: 0 25px;
        }

        .total-display-table {
            box-sizing: border-box;
            page-break-inside: avoid;
            page-break-before: auto;
            page-break-after: auto;
            margin-left: 500px;
            margin-top: 20px;
            border: 1px solid #EAF1FB;
            border-top: none;
        }

        .total-table-attribute-label {
            font-size: 12px;
            color: #55547A;
            text-align: left;
            padding-left: 10px;
        }

        .total-table-attribute-value {
            font-weight: bold;
            text-align: right;
            font-size: 12px;
            color: #040405;
            padding-right: 10px;
            padding-top: 2px;
            padding-bottom: 2px;
        }

        .total-border-left {
            border: 1px solid #E8E8E8 !important;
            border-right: 0px !important;
            padding-top: 0px;
            padding: 8px !important;
        }

        .total-border-right {
            border: 1px solid #E8E8E8 !important;
            border-left: 0px !important;
            padding-top: 0px;
            padding: 8px !important;
        }

        /* -- Notes -- */

        .notes {
            font-size: 12px;
            color: #595959;
            margin-top: 15px;
            margin-left: 30px;
            width: 442px;
            text-align: left;
            page-break-inside: avoid;
        }

        .notes-label {
            font-size: 15px;
            line-height: 22px;
            letter-spacing: 0.05em;
            color: #040405;
            width: 108px;
            height: 19.87px;
            padding-bottom: 10px;
        }

        /* -- Helpers -- */

        .text-primary {
            color: #5851DB;
        }

        .text-center {
            text-align: center
        }

        table .text-left {
            text-align: left;
        }

        table .text-right {
            text-align: right;
        }

        .border-0 {
            border: none;
        }

        .py-2 {
            padding-top: 2px;
            padding-bottom: 2px;
        }

        .py-8 {
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .py-3 {
            padding: 3px 0;
        }

        .pr-20 {
            padding-right: 20px;
        }

        .pr-10 {
            padding-right: 10px;
        }

        .pl-20 {
            padding-left: 20px;
        }

        .pl-10 {
            padding-left: 10px;
        }

        .pl-0 {
            padding-left: 0;
        }
    </style>
</head>

<body>
    <div class="header-container">
        <table width="100%">
            <tr>
                @if($logo)
                <td class="header-section-left">
                    <img class="header-logo" src="{{ $logo }}" alt="Company Logo">
                    @else
                    @if($estimate->user->company)
                <td class="header-section-left" style="padding-top:0px;">
                    <h1 class="header-logo"> {{$estimate->user->company->name}} </h1>
                    @endif
                    @endif
                </td>
                <td class="header-section-right company-address-container">
                    @include('app.pdf.estimate.partials.company-address')
                </td>
            </tr>
        </table>
    </div>

    <hr class="header-bottom-divider">

    <div class="wrapper">
        <div class="main-content">
            <div class="customer-address-container">
                <div class="billing-address-container">
                    @include('app.pdf.estimate.partials.billing-address')
                </div>
                @if($estimate->user->billingaddress)
                <div class="shipping-address-container">
                    @else
                    <div class="shipping-address-container--left">
                        @endif
                        @include('app.pdf.estimate.partials.shipping-address')
                    </div>
                    <div style="clear: both;"></div>
                </div>

                <div class="estimate-details-container">
                    <table>
                        <tr>
                            <td class="attribute-label">Estimate Number</td>
                            <td class="attribute-value"> &nbsp;{{$estimate->estimate_number}}</td>
                        </tr>
                        <tr>
                            <td class="attribute-label">Estimate Date </td>
                            <td class="attribute-value"> &nbsp;{{$estimate->formattedEstimateDate}}</td>
                        </tr>
                        <tr>
                            <td class="attribute-label">Expiry Date</td>
                            <td class="attribute-value"> &nbsp;{{$estimate->formattedExpiryDate}}</td>
                        </tr>
                    </table>
                </div>
                <div style="clear: both;"></div>
            </div>
            @include('app.pdf.estimate.partials.table')
            @include('app.pdf.estimate.partials.notes')
        </div>
    </div>
</body>

</html>
