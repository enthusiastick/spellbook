class Api::V1::SpellsController < ApplicationController
  def index
    @spells = Spell.all.group_by{ |spell| spell.level }.map { |k,v| { level: k, spells: v } }
    render json: { levels: @spells }
  end
end
