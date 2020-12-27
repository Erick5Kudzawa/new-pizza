<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public const PENDING_PROCESSING = 0;
    public const PREPARING = 1;
    public const READY_TO_SHIP = 2;
    public const CANCELED = 3;
    public const SENT = 4;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'status',
    ];

    protected $table = 'orders';

    public static function getDictionary(): array
    {
        return [
            self::PENDING_PROCESSING => 'Не обработан',
            self::PREPARING => 'Готовка',
            self::READY_TO_SHIP => 'Готов к отправке',
            self::CANCELED => 'Отменён',
            self::SENT => 'Отправлен',
        ];
    }

    public function scopeStatus($query, $status)
    {
        $orderStatuses = self::getDictionary();

        if ($status == $orderStatuses[self::PENDING_PROCESSING])
            $query->where('status', self::PENDING_PROCESSING);
        else if ($status == $orderStatuses[self::PREPARING])
            $query->where('status', self::PREPARING);
        else if ($status == $orderStatuses[self::READY_TO_SHIP])
            $query->where('status', self::READY_TO_SHIP);
        else if ($status == $orderStatuses[self::CANCELED])
            $query->where('status', self::CANCELED);
        else if ($status == $orderStatuses[self::SENT])
            $query->where('status', self::SENT);
        else
            null;
    }
}
